<?php

namespace App\Http\Controllers;

use App\Models\Download;
use App\Queries\Filters\FilterMultipleFields;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class DownloadController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $isAuthenticated = (bool) $request->user();

        $perPage = request()->input('perPage', 10);
        if ($perPage > 100) {
            $perPage = 100;
        }

        $fields = [
            'id',
            'name',
            'slug',
            'is_active',
            'download_count',
            'created_at',
            'updated_at',
        ];
        $downloads = QueryBuilder::for(Download::class)
            ->select($fields)
            ->allowedFilters([
                ...$fields,
                AllowedFilter::custom('q', new FilterMultipleFields(['id', 'name', 'description'])),
            ])
            ->allowedSorts($fields)
            ->defaultSort('-download_count')
            ->paginate($perPage)
            ->withQueryString();

        return Inertia::render('Download/IndexDownload', [
            'downloads' => $downloads,
            'filters' => request()->all(['perPage', 'sort', 'filter']),
        ]);
    }

    public function show(Request $request, Download $download)
    {
        $this->authorize('download', $download);

        return Inertia::render('Download/ShowDownload', [
            'download' => $download->only([
                'id',
                'name',
                'slug',
                'description',
                'is_active',
                'download_count',
                'created_at',
                'updated_at',
            ]),
        ]);
    }

    public function download(Download $download)
    {
        $this->authorize('download', $download);

        $download->increment('download_count');

        $isExternal = $download->is_external;
        $isExternalUrlHidden = $download->is_external_url_hidden;

        if (! $isExternal) {
            $file = $download->file;

            return $file;
        }

        if ($isExternal && $isExternalUrlHidden) {
            return response()->streamDownload(function () use ($download) {
                echo file_get_contents($download->file_url);
            }, $download->file_name);
        }

        return redirect($download->file_url);
    }
}

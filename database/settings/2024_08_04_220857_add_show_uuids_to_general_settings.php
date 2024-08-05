<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class AddShowUuidsToGeneralSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.show_uuids', true);
    }

    public function down(): void
    {
        $this->migrator->deleteIfExists('general.show_uuids');
    }
};

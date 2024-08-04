<?php

namespace App\Utils\Helpers;

use DB;
use JetBrains\PhpStorm\Pure;

class Helper
{
    /**
     * Returns an estimated reading time in a string
     * idea from @link http://briancray.com/posts/estimated-reading-time-web-design/
     *
     * @param  string  $content the content to be read
     * @param  int  $wpm
     * @param  bool  $showSeconds
     * @return string          estimated read time eg. 1 minute, 30 seconds
     */
    #[Pure]
    public static function getEstimateReadingTime(string $content, $wpm = 200, $showSeconds = false): string
    {
        $wordCount = str_word_count(strip_tags($content));

        $minutes = (int) floor($wordCount / $wpm);
        $seconds = (int) floor($wordCount % $wpm / ($wpm / 60));

        if (! $showSeconds) {
            if ($seconds > 0) {
                $minutes++;
            }
        }

        $str_minutes = ($minutes <= 1) ? 'minute' : 'minutes';
        $str_seconds = ($seconds <= 1) ? 'second' : 'seconds';

        if ($showSeconds) {
            if ($minutes === 0) {
                return "{$seconds} {$str_seconds}";
            } else {
                return "{$minutes} {$str_minutes}, {$seconds} {$str_seconds}";
            }
        } else {
            return "{$minutes} {$str_minutes}";
        }
    }

    public static function uniqidReal($length = 13): bool|string
    {
        // uniqid gives 13 chars, but you could adjust it to your needs.
        try {
            if (function_exists('random_bytes')) {
                $bytes = random_bytes(ceil($length / 2));
            } elseif (function_exists('openssl_random_pseudo_bytes')) {
                $bytes = openssl_random_pseudo_bytes(ceil($length / 2));
            } else {
                throw new \Exception('no cryptographically secure random function available');
            }

            return substr(bin2hex($bytes), 0, $length);
        } catch (\Exception $exception) {
            return \Str::random($length);
        }
    }

    public static function fastCount($table)
    {
        $q1 = "SELECT SQL_CALC_FOUND_ROWS * FROM $table LIMIT 1;";
        $q2 = 'SELECT FOUND_ROWS() as count;';

        $r1 = DB::select($q1);
        $r2 = DB::select($q2);

        return $r2[0]->count;
    }

    public static function escapeLike($string)
    {
        $search = ['%', '_'];
        $replace = ['\%', '\_'];

        return str_replace($search, $replace, $string);
    }

    public static function generateNumericOtp(int $length = 6): string
    {
        $i = 0;
        $otp = '';

        while ($i < $length) {
            $otp .= random_int(0, 9);
            $i++;
        }

        return $otp;
    }

    public static function replacePlaceholders(string $content, array $placeholders): string
    {
        foreach ($placeholders as $key => $value) {
            $content = str_ireplace('{'.$key.'}', $value, $content);
        }

        return $content;
    }

    public static function compareVersions($version1, $version2)
    {
        // Split the version strings by the dot character.
        $parts1 = explode('.', $version1);
        $parts2 = explode('.', $version2);

        // Compare each part of the version numbers.
        for ($i = 0; $i < 3; $i++) {
            // Convert parts to integers for numerical comparison.
            $v1 = isset($parts1[$i]) ? (int) $parts1[$i] : 0;
            $v2 = isset($parts2[$i]) ? (int) $parts2[$i] : 0;

            // Compare the current parts.
            if ($v1 > $v2) {
                return 1;
            } elseif ($v1 < $v2) {
                return -1;
            }
        }

        // If all parts are equal, return 0.
        return 0;
    }
}

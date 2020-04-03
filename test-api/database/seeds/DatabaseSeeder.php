<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Campaigns;
use App\Teams;
use App\User;
use App\Memberships;

use App\Helpers\CsvHelper as HelpersCsvHelper;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();

        // $this->call(UserSeeder::class);
        DB::table('teams')->truncate();
        DB::table('users')->truncate();
        DB::table('campaigns')->truncate();
        DB::table('memberships')->truncate();

        Schema::enableForeignKeyConstraints();

        // add users 
        $usersfile = 'database/csvs/users.csv';
        $users = HelpersCsvHelper::csvToArray($usersfile);
        for ($i = 0; $i < count($users); $i++) {
            User::firstOrCreate($users[$i]);
        }

        // add teams
        $teamsfile = 'database/csvs/teams.csv';
        $teams = HelpersCsvHelper::csvToArray($teamsfile);
        for ($i = 0; $i < count($teams); $i++) {
            Teams::firstOrCreate($teams[$i]);
        }

        // add campaigns
        $Campaignsfile = 'database/csvs/campaigns.csv';
        $campaigns = HelpersCsvHelper::csvToArray($Campaignsfile);
        for ($i = 0; $i < count($campaigns); $i++) {
            Campaigns::firstOrCreate($campaigns[$i]);
        }

        // add memberships
        $Membershipsfile = 'database/csvs/memberships.csv';
        $memberships = HelpersCsvHelper::csvToArray($Membershipsfile);
        for ($i = 0; $i < count($memberships); $i++) {
            Memberships::firstOrCreate($memberships[$i]);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Campaigns;
use Illuminate\Http\Request;

class CampaignsController extends Controller
{
    public function index()
    {
        return Campaigns::with('team')->get();
    }

    public function getByTeam($team_name)
    {
        if (!$team_name) {
            $this->index();
        } else {
            $Campaigns = Campaigns::with('team')->whereHas('team', function ($team) use ($team_name) {
                $team->where('name', 'like', '%' . $team_name . '%');
            })->get();
            return $Campaigns;
        }
    }
}

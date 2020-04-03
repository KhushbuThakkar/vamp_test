<?php

namespace App\Http\Controllers;

use App\Campaigns;
use Illuminate\Http\Request;

class CampaignsController extends Controller
{
    public function index()
    {
        return Campaigns::all();
    }
}

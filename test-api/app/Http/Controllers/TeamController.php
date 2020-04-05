<?php

namespace App\Http\Controllers;

use App\Teams;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        return Teams::with('campaigns')->get();
    }
}

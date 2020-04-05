<?php

namespace App;

use App\Teams;
use Illuminate\Database\Eloquent\Model;

class Campaigns extends Model
{
    public function team()
    {
        return $this->belongsTo(Teams::class, 'team_id', 'id');
    }
}

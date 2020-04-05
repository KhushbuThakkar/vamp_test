<?php

namespace App;

use App\Campaigns;

use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    public function campaigns()
    {
        return $this->hasMany(Campaigns::class, 'team_id', 'id');
    }
}

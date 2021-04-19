<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoticeModel extends Model
{
    use HasFactory;
    protected $table = "notice";

    protected $fillable = [
      'content'
    ];
}

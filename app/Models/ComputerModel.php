<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComputerModel extends Model
{
    use HasFactory;
    protected $table = "computer";

    protected $fillable = [
      'name',
      'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function order()
    {
        return $this->hasMany(OrderModel::class,'computer_id');
    }
}

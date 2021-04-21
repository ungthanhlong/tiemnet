<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuModel extends Model
{
    use HasFactory;

    protected $table = "menu";

    protected $fillable = [
      'name',
      'type',
      'price'
    ];

    public function order()
    {
        return $this->hasMany(OrderModel::class,'menu_id');
    }
}

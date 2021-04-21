<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderModel extends Model
{
    use HasFactory;
    protected $table = "order";

    protected $fillable = [
      'total',
      'user_id',
      'computer_id',
      'menu_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function computer()
    {
        return $this->belongsTo(ComputerModel::class, 'computer_id');
    }
    public function menu()
    {
        return $this->belongsTo(MenuModel::class, 'menu_id');
    }
}

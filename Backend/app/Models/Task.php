<?php

namespace App\Models;

class Task
{
    public $id;
    public $title;
    public $description;
    public $due_date;
    public $priority;

    public function __construct($id, $title, $description = null, $due_date = null, $priority = 'low')
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->due_date = $due_date;
        $this->priority = $priority;
    }
}


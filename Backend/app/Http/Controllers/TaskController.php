<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class TaskController extends Controller
{
    //Costruttore con esempio	
    public function __construct()
    {
        $this->tasks = session()->get('tasks', [
            ['id' => 1, 'title' => 'Task esempio', 'description' => 'Questo è un task di esempio', 'due_date' => '2024-06-11', 'priority' => 'media'],
        ]);
    }

    //Salva Task
    private function saveTasks($tasks)
    {
        session()->put('tasks', $tasks);
    }

    //Indice dei Task
    public function index()
    {
        $tasks = session()->get('tasks', $this->tasks);
        return view('tasks.index', ['tasks' => $tasks]);
    }

    //Crea Task
    public function create()
    {
        return view('tasks.create');
    }

    //Salva Task
    public function store(Request $request)
    {
        $tasks = session()->get('tasks', $this->tasks);
        $newTask = [
            'id' => count($tasks) + 1,
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'due_date' => $request->input('due_date'),
            'priority' => $request->input('priority'),
        ];
        $tasks[] = $newTask;
        $this->saveTasks($tasks);

        return redirect()->route('tasks.index');
    }

    //Modifica Task
    public function edit($id)
    {
        $tasks = session()->get('tasks', $this->tasks);
        $task = collect($tasks)->firstWhere('id', $id);

        return view('tasks.edit', ['task' => $task]);
    }

    //Aggiorna Task con tutte le modifiche
    public function update(Request $request, $id)
    {
        $tasks = session()->get('tasks', $this->tasks);
        foreach ($tasks as &$task) {
            if ($task['id'] == $id) {
                $task['title'] = $request->input('title');
                $task['description'] = $request->input('description');
                $task['due_date'] = $request->input('due_date');
                $task['priority'] = $request->input('priority');
                break;
            }
        }
        $this->saveTasks($tasks);

        return redirect()->route('tasks.index');
    }

    //Cancella Task e aggiorna la pagina
    public function destroy($id)
    {
        $tasks = session()->get('tasks', $this->tasks);
        $tasks = array_filter($tasks, function ($task) use ($id) {
            return $task['id'] != $id;
        });
        $this->saveTasks(array_values($tasks));

        return redirect()->route('tasks.index');
    }
}


/*
<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
class TaskController extends Controller
{
    private $tasks = [];

    public function __construct()
    {
        $this->tasks = session()->get('tasks', [
            new Task(1, 'Task esempio', 'questo è un task di esempio', '2024-06-11', 'media'),
        ]);
    }

    public function index()
    {
        return view('tasks.index', ['tasks' => $this->tasks]);
    }

    public function create()
    {
        return view('tasks.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
            'due_date' => 'nullable|date',
            'priority' => 'nullable|in:low,medium,high',
        ]);

        $newId = end($this->tasks)->id + 1;
        $task = new Task($newId, $request->title, $request->description, $request->due_date, $request->priority);
        $this->tasks[] = $task;
        session()->put('tasks', $this->tasks);

        return redirect()->route('tasks.index')->with('success', 'Task created successfully.');
    }

    public function edit($id)
    {
        $task = $this->findTaskById($id);
        return view('tasks.edit', compact('task'));
    }

    public function update(Request $request, $id)
    {http://127.0.0.1:8000
        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
            'due_date' => 'nullable|date',
            'priority' => 'nullable|in:low,medium,high',
        ]);

        $task = $this->findTaskById($id);
        $task->title = $request->title;
        $task->description = $request->description;
        $task->due_date = $request->due_date;
        $task->priority = $request->priority;
        session()->put('tasks', $this->tasks);

        return redirect()->route('tasks.index')->with('success', 'Task updated successfully.');
    }

    public function destroy($id)
    {
        $this->tasks = array_filter($this->tasks, function ($task) use ($id) {
            return $task->id != $id;
        });
        session()->put('tasks', $this->tasks);

        return redirect()->route('tasks.index')->with('success', 'Task deleted successfully.');
    }

    private function findTaskById($id)
    {
        foreach ($this->tasks as $task) {
            if ($task->id == $id) {
                return $task;
            }
        }
        abort(404);
    }
}
*/


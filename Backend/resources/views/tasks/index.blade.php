<!DOCTYPE html>
<html>
<head>
    <title>Indice dei Task</title>
</head>
<body>
        <h1>Elenco Task</h1>
        <a href="{{ route('tasks.create') }}" class="btn btn-primary">Aggiungi Task</a>

        <ul>
            @foreach($tasks as $task)
                <li>
                    <h3>{{ $task['title'] }}</h3>
                    <p>{{ $task['description'] }}</p>
                    <p>Scadenza: {{ $task['due_date'] }}</p>
                    <p>Priorità: {{ $task['priority'] }}</p>
                    <a href="{{ route('tasks.edit', $task['id']) }}" class="btn btn-secondary">Modifica</a>
                    <form action="{{ route('tasks.destroy', $task['id']) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Elimina</button>
                    </form>
                </li>
            @endforeach
        </ul>
</body>
</html>



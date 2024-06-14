<!DOCTYPE html>
<html>
<head>
    <title>Modifica Task</title>
</head>
<body>
        <h1>Modifica Task</h1>

        <form action="{{ route('tasks.update', $task['id']) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="title">Titolo</label>
                <input type="text" class="form-control" id="title" name="title" value="{{ $task['title'] }}" required>
            </div>
            <div class="form-group">
                <label for="description">Descrizione</label>
                <textarea class="form-control" id="description" name="description" required>{{ $task['description'] }}</textarea>
            </div>
            <div class="form-group">
                <label for="due_date">Data di Scadenza</label>
                <input type="date" class="form-control" id="due_date" name="due_date" value="{{ $task['due_date'] }}" required>
            </div>
            <div class="form-group">
                <label for="priority">Priorità</label>
                <select class="form-control" id="priority" name="priority" required>
                    <option value="bassa" {{ $task['priority'] == 'bassa' ? 'selected' : '' }}>Bassa</option>
                    <option value="media" {{ $task['priority'] == 'media' ? 'selected' : '' }}>Media</option>
                    <option value="alta" {{ $task['priority'] == 'alta' ? 'selected' : '' }}>Alta</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Aggiorna</button>
        </form>
</body>
</html>



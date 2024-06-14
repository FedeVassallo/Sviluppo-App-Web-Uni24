<!DOCTYPE html>
<html>
<head>
    <title>Crea Task</title>
</head>
<body>
        <h1>Aggiungi Nuovo Task</h1>

        <form action="{{ route('tasks.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="title">Titolo</label>
                <input type="text" class="form-control" id="title" name="title" required>
            </div>
            <div class="form-group">
                <label for="description">Descrizione</label>
                <textarea class="form-control" id="description" name="description" required></textarea>
            </div>
            <div class="form-group">
                <label for="due_date">Data di Scadenza</label>
                <input type="date" class="form-control" id="due_date" name="due_date" required>
            </div>
            <div class="form-group">
                <label for="priority">Priorità</label>
                <select class="form-control" id="priority" name="priority" required>
                    <option value="bassa">Bassa</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Salva</button>
        </form>
</body>
</html>


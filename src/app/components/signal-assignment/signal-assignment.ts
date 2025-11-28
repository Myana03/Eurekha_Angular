import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-assignment',
  imports: [],
  templateUrl: './signal-assignment.html',
  styleUrl: './signal-assignment.css',
})
export class SignalAssignment {
 tasks = signal([
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ]);

  completedTasks=computed(()=>{
    this.tasks().filter(task=>task.completed)
  })

    remainingTasks=computed(()=>{
    this.tasks().filter(task=>!task.completed)
  })

   toggle(task: any) {
    this.tasks.update(list =>
      list.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  }
    delete(task: any) {
    this.tasks.update(list =>
      list.filter(t => t.id !== task.id)
    );
  }
}

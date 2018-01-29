import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  chapters = [
    {name: '1', type: 'chapter'},
    {name: '2', type: 'chapter'},
    {name: '3', type: 'chapter'},
    {name: '4', type: 'chapter'}];

  droppedChapters = [];
  droppedItems = [];
  dragEnabled = true;

  onChapterDrop(e: any) {
    this.droppedChapters.push(e.dragData);
    this.removeItem(e.dragData, this.chapters);
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'chapter') {
      this.removeItem(e.dragData, this.chapters);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}

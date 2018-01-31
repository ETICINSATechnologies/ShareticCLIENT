import { Component, OnInit } from '@angular/core';
import { Chapter} from '../../entities/chapter';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  chapters: Chapter [];

  emptyChapter: Chapter = {
    id: 0,
    title: 'Chapitre',
    content: '',
    rating: 0
  };

  items = [
    this.emptyChapter
   ];

  droppedChapters = [];
  droppedItems = [];

  onItemDrop(e: any) {
    this.droppedChapters.push(e.dragData);
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

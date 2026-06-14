import { Component, OnInit } from '@angular/core';
import { Formula } from '../../models';
import { FORMULAS } from '../../data/formulas.data';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.css']
})
export class FormulasComponent implements OnInit {
  allFormulas: Formula[] = FORMULAS;
  filtered: Formula[] = [];
  activeSection = 'all';
  searchTerm = '';
  expandedId: string | null = null;

  ngOnInit() { this.applyFilter(); }

  setSection(s: string) { this.activeSection = s; this.applyFilter(); }

  applyFilter() {
    this.filtered = this.allFormulas.filter(f => {
      const secMatch = this.activeSection === 'all' || f.section === this.activeSection;
      const term = this.searchTerm.toLowerCase();
      const searchMatch = !term ||
        f.title.toLowerCase().includes(term) ||
        f.topic.toLowerCase().includes(term) ||
        f.formula.toLowerCase().includes(term);
      return secMatch && searchMatch;
    });
  }

  toggle(id: string) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  sectionIcon(s: string): string {
    return s === 'quant' ? '🔢' : s === 'reasoning' ? '🧩' : '📖';
  }

  sectionColor(s: string): string {
    return s === 'quant' ? '#3b82f6' : s === 'reasoning' ? '#8b5cf6' : '#10b981';
  }
}

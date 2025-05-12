import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  private userService = inject(UserService);

  // Signals
  currentPage = this.userService.getCurrentPage();
  itemsPerPage = this.userService.getItemsPerPage();
  paginatedUsers = computed(() => this.userService.getPaginatedUsers());
  totalPages = computed(() => this.userService.getTotalPages());

  onPageChange(page: number) {
    this.userService.setCurrentPage(page);
  }

  onItemsPerPageChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.userService.setItemsPerPage(Number(select.value));
  }
} 
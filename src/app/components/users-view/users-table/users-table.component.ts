import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Department, EditableUser, User } from 'src/app/models/user.model';
import { deleteUser } from 'src/app/store/users/users.actions';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnChanges {
  @Input() data: User[] = [];
  @Input() loading = false;
  displayedColumns = ['id', 'name', 'email', 'department', 'operations'];

  departments = Object.values(Department);
  tableForm = this.formBuilder.group({
    tableRows: this.formBuilder.array<EditableUser>([]),
  });
  tableRows = this.getFormControls;
  valuesBeforeEditing = new Map<number, EditableUser>();

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnChanges() {
    if (!this.data) return;
    this.tableForm = this.formBuilder.group({
      tableRows: this.formBuilder.array<EditableUser>([]),
    });
    this.data.forEach((user) => {
      this.addRow(user);
    });
  }

  private createFormGroup(user: User): FormGroup {
    return this.formBuilder.group({
      id: [user.id],
      name: [user.name, Validators.required],
      email: [user.email, [Validators.email, Validators.required]],
      department: [user.department, [Validators.required]],
      isEditable: [false],
    });
  }

  get getFormControls() {
    const control = this.tableForm.get('tableRows') as FormArray;
    return control;
  }

  private addRow(user: User) {
    const tableRows = this.getFormControls;
    const newUser = this.createFormGroup(user);
    tableRows.push(newUser);
  }

  // onDeleteClick(
  //   group: AbstractControl<EditableUser, EditableUser>,
  //   rowIndex: number
  // ) {
  //   const user = group.value;
  //   this.store.dispatch(deleteUser({ userId: user.id }));
  // }

  onEditClick(
    group: AbstractControl<EditableUser, EditableUser>,
    rowIndex: number
  ) {
    group.disable();
    this.valuesBeforeEditing.set(rowIndex, group.getRawValue());
    this.setUserIsEditable(group, true);
  }

  onDeleteClick(
    group: AbstractControl<EditableUser, EditableUser>,
    rowIndex: number
  ) {
    const user = group.value;
    // const event: TableEvent = {
    //   user,
    //   type: TableEventType.DeleteRow,
    //   rowIndex,
    // };
    // this.tableEventEE.emit(event);
  }

  onConfirmEdit(
    group: AbstractControl<EditableUser, EditableUser>,
    rowIndex: number
  ) {
    const user = group.value;
  }

  onCancelClick(
    group: AbstractControl<EditableUser, EditableUser>,
    rowIndex: number
  ) {
    const previousRawValue = this.valuesBeforeEditing.get(rowIndex!);
    group.setValue(previousRawValue!);
    this.valuesBeforeEditing.delete(rowIndex);
  }

  private setUserIsEditable(
    group: AbstractControl<EditableUser, EditableUser>,
    value: boolean
  ) {
    group.get('isEditable')!.setValue(value);
  }
}

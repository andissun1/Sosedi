export class CreateRentDto {
  comment: string;
  NumOfPeople: string;
  date: Date[]; // Начало и конец аренды
  customerId: string;
  slotId?: number;
}

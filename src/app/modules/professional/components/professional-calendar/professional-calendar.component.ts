import { Component, OnInit, Input } from '@angular/core';
import { SlotDate } from '../../models/slotDate';
import { Slot } from '../../models/slot';
import { SlotService } from 'src/app/core/services/slot.service';
import * as moment from 'moment';

@Component({
  selector: 'app-professional-calendar',
  templateUrl: './professional-calendar.component.html',
  styleUrls: ['./professional-calendar.component.scss']
})
export class ProfessionalCalendarComponent implements OnInit {

  @Input() profissionalId: number;
  @Input() numberDays = 4;

  dates: Date[];
  slotDates: SlotDate[];
  timeZone: string;
  loading: boolean;

  constructor(
    private slotService: SlotService
  ) {
    this.dates = new Array<Date>();
    this.slotDates = new Array<SlotDate>();
    this.timeZone = `${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    this.loading = false;
  }

  ngOnInit(): void {
    this.dates = this.generateDates(this.numberDays, new Date(new Date().setHours(0, 0, 0, 0)));
    this.generateSlots(this.dates);
  }

  generateDates(numberDays: number, startDay: Date): Date[] {
    let dayPosition = 0;
    let day = startDay;
    const days = new Array<Date>();

    while (dayPosition < numberDays) {
      days.push(day);
      dayPosition += 1;
      day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + (1));
    }
    return days;
  }

  generateSlots(dates: Date[]) {
    this.loading = true;
    this.slotDates = new Array<SlotDate>();

    this.slotService.getSlots(this.profissionalId).subscribe(response => {

      dates.forEach(date => {
        const slotDate = new SlotDate();
        slotDate.date = date;
        slotDate.slot = new Array<Slot>();

        response.forEach(slot => {
          if (moment().isBefore(slot.time)
            && (moment(date).format('DD/MM/YYYY') === moment(slot.time).format('DD/MM/YYYY')
              && this.profissionalId === slot.professionalId
              && !slot.reserved)) {
            slotDate.slot.push(slot);
          }
        });

        this.slotDates.push(slotDate);
      });
      this.loading = false;
    });

  }

  buttonDisabled() {
    let disabled = false;
    if (this.dates && (moment(this.dates[0]).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY'))) {
      disabled = true;
    }
    return disabled;
  }

  next() {
    const endDate = this.dates[this.numberDays - 1];
    this.dates = this.generateDates(this.numberDays, (new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + (1))));
    this.generateSlots(this.dates);
  }

  previous() {
    const startDate = this.dates[0];
    this.dates = this.generateDates(this.numberDays,
      (new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - (this.numberDays))));
    this.generateSlots(this.dates);
  }

  checkAvailableSlot(slotDates: SlotDate[]) {
    let response = false;
    const slotDate = slotDates.find(x => x.slot.length > 0);
    response = slotDate ? true : false;
    return response;
  }

}

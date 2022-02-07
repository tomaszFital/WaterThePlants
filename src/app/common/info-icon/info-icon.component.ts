import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-info-icon",
  templateUrl: "./info-icon.component.html",
  styleUrls: ["./info-icon.component.scss"]
})
export class InfoIconComponent implements OnInit {
  @Input() fillPercent = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

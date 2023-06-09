import { Component, Input } from "@angular/core";

@Component({
  selector: "logo-icone",
  templateUrl: "logo-icone.component.html",
  styleUrls: ["logo-icone.component.css"],
})
export class LogoIcone {
  @Input()
  rootClassName: string = "";
  @Input()
  image_src: string =
    "/assets/playground_assets/logo%20soft%20clever%20png-200h.png";
  @Input()
  image_alt: string = "image";
  constructor() {}
}

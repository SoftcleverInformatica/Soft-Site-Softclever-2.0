import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-erp",
  templateUrl: "landing-sistema-erp.component.html",
  styleUrls: ["landing-sistema-erp.component.css"],
})
export class LandingSistemaERP {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Sistema-ERP - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Sistema-ERP - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}

import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-erp",
  templateUrl: "landing-erp.component.html",
  styleUrls: ["landing-erp.component.css"],
})
export class LandingERP {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-ERP - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-ERP - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}

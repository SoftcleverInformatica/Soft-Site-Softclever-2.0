import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

const routes = [
  {
    path: "cupom-fiscal-eletronico",
    loadChildren: () =>
      import(
        "./pages/landing-cupom-fiscal-eletronico/landing-cupom-fiscal-eletronico.module"
      ).then((m) => m.LandingCupomFiscalEletronicoModule),
  },
  {
    path: "sistema-sat-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-sat-fiscal/landing-sistema-sat-fiscal.module"
      ).then((m) => m.LandingSistemaSatFiscalModule),
  },
  {
    path: "sistema-retaguarda-sat",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-retaguarda-sat/landing-sistema-retaguarda-sat.module"
      ).then((m) => m.LandingSistemaRetaguardaSatModule),
  },
  {
    path: "solucao-industria--servico",
    loadChildren: () =>
      import(
        "./pages/solucao-industria--servico/solucao-industria--servico.module"
      ).then((m) => m.SolucaoIndustriaServicoModule),
  },
  {
    path: "equipamento-sat",
    loadChildren: () =>
      import(
        "./pages/landing-equipamento-sat/landing-equipamento-sat.module"
      ).then((m) => m.LandingEquipamentoSatModule),
  },
  {
    path: "solucao-fiscal",
    loadChildren: () =>
      import("./pages/solucao-fiscal/solucao-fiscal.module").then(
        (m) => m.SolucaoFiscalModule
      ),
  },
  {
    path: "sat-desenvolvedor",
    loadChildren: () =>
      import(
        "./pages/landing-sat-desenvolvedor/landing-sat-desenvolvedor.module"
      ).then((m) => m.LandingSatDesenvolvedorModule),
  },
  {
    path: "sat-cupom-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-sat-cupom-fiscal/landing-sat-cupom-fiscal.module"
      ).then((m) => m.LandingSatCupomFiscalModule),
  },
  {
    path: "politica-de-privacidade",
    loadChildren: () =>
      import(
        "./pages/politica-de-privacidade/politica-de-privacidade.module"
      ).then((m) => m.PoliticaDePrivacidadeModule),
  },
  {
    path: "sistema-para-cupom-fiscal-eletronico",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-para-cupom-fiscal-eletronico/landing-sistema-para-cupom-fiscal-eletronico.module"
      ).then((m) => m.LandingSistemaParaCupomFiscalEletronicoModule),
  },
  {
    path: "integracao-de-sistema-sat",
    loadChildren: () =>
      import(
        "./pages/landing-integracao-de-sistema-sat/landing-integracao-de-sistema-sat.module"
      ).then((m) => m.LandingIntegracaoDeSistemaSatModule),
  },
  {
    path: "software-sat",
    loadChildren: () =>
      import("./pages/landing-software-sat/landing-software-sat.module").then(
        (m) => m.LandingSoftwareSatModule
      ),
  },
  {
    path: "sistema-pdv-sat",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-pdv-sat/landing-sistema-pdv-sat.module"
      ).then((m) => m.LandingSistemaPdvSatModule),
  },
  {
    path: "sat",
    loadChildren: () =>
      import("./pages/landing-sat/landing-sat.module").then(
        (m) => m.LandingSatModule
      ),
  },
  {
    path: "solucao-varejo",
    loadChildren: () =>
      import("./pages/solucao-varejo/solucao-varejo.module").then(
        (m) => m.SolucaoVarejoModule
      ),
  },
  {
    path: "emissor-cupom-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-emissor-cupom-fiscal/landing-emissor-cupom-fiscal.module"
      ).then((m) => m.LandingEmissorCupomFiscalModule),
  },
  {
    path: "sistema-sat",
    loadChildren: () =>
      import("./pages/landing-sistema-sat/landing-sistema-sat.module").then(
        (m) => m.LandingSistemaSatModule
      ),
  },
  {
    path: "sat-fiscal",
    loadChildren: () =>
      import("./pages/landing-sat-fiscal/landing-sat-fiscal.module").then(
        (m) => m.LandingSatFiscalModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "sistema-sat-fiscal-gratuito",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-sat-fiscal-gratuito/landing-sistema-sat-fiscal-gratuito.module"
      ).then((m) => m.LandingSistemaSatFiscalGratuitoModule),
  },
  {
    path: "software-sat-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-software-sat-fiscal/landing-software-sat-fiscal.module"
      ).then((m) => m.LandingSoftwareSatFiscalModule),
  },
  {
    path: "cupom-fiscal-sat",
    loadChildren: () =>
      import(
        "./pages/landing-cupom-fiscal-sat/landing-cupom-fiscal-sat.module"
      ).then((m) => m.LandingCupomFiscalSatModule),
  },
  {
    path: "solucao-atacado--distribuicao",
    loadChildren: () =>
      import(
        "./pages/solucao-atacado--distribuicao/solucao-atacado--distribuicao.module"
      ).then((m) => m.SolucaoAtacadoDistribuicaoModule),
  },
  {
    path: "contato",
    loadChildren: () =>
      import("./pages/contato/contato.module").then((m) => m.ContatoModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

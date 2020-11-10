# Netpark teste

Os mocks estão feitos locais, sem chamada para o servidor.
Não estão sendo feitas chamadas http

O aplicativo foi feito em um ubuntu 18 e testado em um celular MotoG 5S. (não foi testado em iphone)
Os estilos do aplicativo foi forçado tanto para iphone e android para usar "md" (Material Design)

## Testar no browser

```
ionic serve
```

## Para fazer build

```
ionic build
npx cap add android
npx cap open android
```

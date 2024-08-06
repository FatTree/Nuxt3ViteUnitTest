# Unit Test - Vitest
## Overall
![測試畫面](https://github.com/FatTree/Nuxt3ViteUnitTest/blob/dev/public/forReadMe3.png)

**專案簡介**
* 在NUXT3專案練習Vitest；主要測function，不會測component。
* API Calling規劃成`composable`，讓`store`比較好實做
* `store`裡處理資料邏輯
* `formatter`處理後端回傳的資料型態轉換成前端的資料型態

**使用技術**
* **前端框架**：`VUE3`, `NUXT3`
* **Other**：`TypeScript`, `Pinia`, `VueRouter`
* **Unit test**：`Vitest`
* **API**: `OFetch`
* **CICD**: 
  * git action $\rightarrow$ unit test
  * git action $\rightarrow$ deploy to git page

**call API 設計**
`composables > useAPI.ts`
包裝成composable，包含三個響應式資料(`Ref<T>`)、一個方法：
* `fetchData`: call api得到的資料
* `isLoading`: UI顯示是否loading的flag
* `errorLog`: 錯誤訊息
* `callAPI()`: call api

## Test
**Composable**
* useTicket 

**Formatter**
* TicketModel

**專案架構**
```
|-- Nuxt3ViteUnitTest
    |-- .gitignore
    |-- README.md
    |-- nuxt.config.ts
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- vitest.config.ts
    |-- yarn.lock
    |-- .github
    |   |-- ...
    |-- .nuxt
    |   |-- ...
    |-- assets
    |   |-- js
    |-- composables
    |   |-- useApi.ts -> API composable
    |   |-- useTicket.ts
    |-- formatters -> translate apiModel to viewModel
    |   |-- ticketFormatter.ts
    |-- layouts
    |   |-- default.vue
    |-- models
    |   |-- apiModel.ts -> from API side
    |   |-- viewModel.ts -> to view side
    |-- pages
    |   |-- index.vue
    |   |-- unittest.vue
    |-- public
    |   |-- favicon.ico
    |   |-- forReadMe.png
    |-- server
    |   |-- ...
    |-- stores
    |   |-- usePartyColor.ts
    |   |-- useTicketStore.ts
    |-- tests
    |   |-- constant.ts -> shared mock resources
    |   |-- composables
    |   |   |-- useTicket.test.ts
    |   |-- formatters
    |       |-- ticketFormatter.test.ts
    |-- utils
        |-- constant.ts
```

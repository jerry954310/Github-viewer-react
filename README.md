### demo影片  


https://user-images.githubusercontent.com/96834013/161789061-a074ad0c-4cdb-4561-af73-4f792a71dbde.mp4




### 環境設定
使用 npx crate-react-app

### 如何啟動
npm i 

npm start

### 功能說明
此專案可以讓使用者輸入 username 來瀏覽其 repository 列表  

第一次依據搜尋結果呼叫api載入10個 repositories，並渲染至頁面上 

若網頁下拉至底時，還有更多資料 (when user has more repositories)

則程式會載入新的10個 repositories ，如此反覆進行直到該user沒有更多的資料

### 程式架構

(1)
所有的 route 皆會實作在 App 主元件中，並渲染 Header.js. 

在 "/" 時，渲染 Search.js ，可以讓使用者輸入欲查詢的 Github username

(2)
當按下搜尋鍵(Search Repo)，會 navigate 至 /users/{username}/repos. 

並同時呼叫 getUserRepos() 將取得的資料存至 RepoData 

當路徑為 "/users/{username}/repos" 時，渲染 RepoList.js  

RepoList 會將 RepoData 內的結果一個個渲染成Repo.js，顯示在畫面上


(3)
當網頁下拉至底時，若還有更多資料，

則會呼叫 RepoList.js 中的 fetchMoreData()來取得新的10個repos  

當取得的資料長度小於10，代表已經沒有更多資料，則將 moreRepo 設為 false 

表示網頁已經到底，同時顯示 "You have seen it all"




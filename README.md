<h1>자바스크립트를 사용한 선택형 앨범 만들기</h1>


![엘범 예시](https://github.com/kjejhk37/Simple-Select-Album/assets/118964808/bc1ba099-5937-49c0-86fe-ee499f01c09b)


<hr/>

<h2>CreateAlbum(AlbumArrayNum) </h2>

선택형 앨범을 추가합니다.
기본 크기로는 width = 1900px, height  = 800px로 지정입니다.

앨범을 담은 박스가 없다면 생성하고 이미 존재한다면 앨범을 추가합니다.


<b>AlbumArrayNum</b> : 선택형 엘범의 데이터베이스의 번호입니다. 배열로 저장하며 0 ~ 4까지입니다. 최대 값은 AlbumArrayNum의 배열 길이를 조절하는 것으로 조절이 가능합니다.
<br/>

<hr/>

<h2>SelectAlbum(AlbumArrayNum, newDiv) </h2>

선택한 엘범박스의 newDiv라는 앨범을 선택하는 함수입니다. 이를 통해서 가장 위로 올라갈 앨범을 지정합니다.

<b>AlbumArrayNum</b> : 선택형 엘범의 데이터베이스의 번호입니다. 배열로 저장하며 0 ~ 4까지입니다. 최대 값은 AlbumArrayNum의 배열 길이를 조절하는 것으로 조절이 가능합니다.
<br/>
<b>newDiv</b> : 선택한 앨범입니다.
<br/>

<hr/>

<h2>scrollToDiv(divId) </h2>

특정 div로 스크롤위치를 움직이는 함수입니다.

<b>divId</b> : focus할 div의 id입니다.
<br/>

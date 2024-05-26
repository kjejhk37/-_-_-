function GetAlbumId(AlbumNum, selectNum) {
  return 'Album_' + AlbumNum + '_' + selectNum;
}

/** id인 Text에 하이퍼 링크 비슷한것을 넣어 둘것인데 대상을 selectNum와 AlbumNum로 정함 */
function SetAlbumSelectFunction(id, selectNum, AlbumNum) {
  const Text = document.getElementById(id);
  if (!Text) return;

  let newDiv = document.getElementById('Album_' + AlbumNum + '_' + selectNum);

  if (!newDiv) return;

  Text.addEventListener('click', () => {
    SelectAlbum(AlbumNum, newDiv);
  });
}

let ArrayAlbumArrayNum = [0, 0, 0, 0, 0];
curSelectAlbum = '';

function CreateAlbum(AlbumArrayNum) {
  if (ArrayAlbumArrayNum[AlbumArrayNum] >= 7) return;

  let MainAlbumDiv = document.getElementById('MainAlbum_' + AlbumArrayNum);
  if (!MainAlbumDiv) {
    MainAlbumDiv = document.createElement('div');

    MainAlbumDiv.id = 'MainAlbum_' + AlbumArrayNum;
    MainAlbumDiv.style.width = '1900px';
    MainAlbumDiv.style.height = '800px';
    //MainAlbumDiv.style.border = '1px solid red';
    MainAlbumDiv.style.marginTop = '100px';
    MainAlbumDiv.style.marginLeft = '20px';
    MainAlbumDiv.style.position = 'absolute';
    MainAlbumDiv.style.transform =
      'translate(0px,' + 800 * AlbumArrayNum + 'px)';

    document.body.appendChild(MainAlbumDiv);
  }

  const newPosDiv = document.createElement('div');
  newPosDiv.style.position = 'absolute';
  newPosDiv.style.display = 'inline-block'; // 올바른 속성 값
  newPosDiv.style.width = '1400px';
  newPosDiv.style.height = '700px';

  const newDiv = document.createElement('div');

  newDiv.id =
    'Album_' + AlbumArrayNum + '_' + ArrayAlbumArrayNum[AlbumArrayNum];
  newDiv.className = newDiv.id;
  newPosDiv.className =
    'PosAlbum_' + AlbumArrayNum + '_' + ArrayAlbumArrayNum[AlbumArrayNum];
  if (curSelectAlbum == '') {
    curSelectAlbum = newDiv.id;
  }

  ArrayAlbumArrayNum[AlbumArrayNum]++;

  newDiv.style.display = 'inline-block'; // 올바른 속성 값
  newDiv.style.border = '2px solid White';
  newDiv.style.outline = '2px solid Black';
  newDiv.style.backgroundColor = 'gray';
  newDiv.style.boxShadow = '10px 10px 5px rgba(0, 0, 0, 0.7)';
  newDiv.style.width = '100%';
  newDiv.style.height = '100%';
  newDiv.style.position = 'absolute';
  newDiv.style.animationDuration = '1s';
  newPosDiv.style.zIndex = '' + (10 - ArrayAlbumArrayNum[AlbumArrayNum]);

  xPos = 50 * (ArrayAlbumArrayNum[AlbumArrayNum] - 1);
  yPos = 10 * (ArrayAlbumArrayNum[AlbumArrayNum] - 1);
  newPosDiv.style.transform = 'translate(' + xPos + 'px,' + yPos + 'px)';

  newDiv.style.transformOrigin = 'left top';
  newDiv.style.transitionDuration = '0.5s';

  newDiv.addEventListener('mouseenter', function () {
    newDiv.style.cursor = 'pointer';
    newDiv.style.scale = '1.02';
  });
  newDiv.addEventListener('mouseleave', function () {
    newDiv.style.cursor = 'default';
    newDiv.style.scale = '1';
  });

  newDiv.addEventListener('click', function () {
    SelectAlbum(AlbumArrayNum, newDiv);
  });

  newDiv.addEventListener('animationend', () => {
    newDiv.style.animation = '';
  });

  MainAlbumDiv.appendChild(newPosDiv);
  newPosDiv.appendChild(newDiv);
}

function SelectAlbum(AlbumArrayNum, newDiv) {
  if (!newDiv) return;

  if (curSelectAlbum == newDiv.id) return;
  curSelectAlbum = newDiv.id;
  const PosAlbums = document.querySelectorAll(
    '[class*="PosAlbum_' + AlbumArrayNum + '"]'
  );

  let TempPosALnum = 1;
  let Find = false;

  PosAlbums.forEach((posalbum) => {
    if (posalbum.contains(newDiv)) {
      posalbum.style.zIndex = '' + 10;
      scrollToDiv(newDiv.id);
      newDiv.style.animation = 'Select 1s';
      Find = true;
      TempPosALnum = 1;
    } else {
      if (Find == false) {
        posalbum.style.zIndex = '' + (1 + TempPosALnum);
      } else {
        posalbum.style.zIndex = '' + (10 - TempPosALnum);
      }

      TempPosALnum++;
    }
  });
}

function scrollToDiv(divId) {
  var element = document.getElementById(divId);
  var elementPosition = element.getBoundingClientRect().top + window.scrollY; // 요소의 현재 화면 상단에서의 위치 계산
  var offset = -100; // 원하는 위치 조정을 위한 오프셋 값

  window.scrollTo({
    top: elementPosition + offset,
    behavior: 'smooth',
  });
}

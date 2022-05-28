# CSS Template Tag Replacer

템플릿 CSS파일 내의 Tag들을 지정한 문자열로 치환하여 새로운 CSS파일을 생성하는 툴입니다.

## 사용법

templates 폴더 내에 템플릿 CSS파일과 치환자모음 JSON파일을 생성합니다.

태그는 "[{@치환자명}]" 형식으로 템플릿 안에 작성하신 후 JSON파일에서 해당 치환자의 대체문자열을 정의해주시면 됩니다.

```
templates/example-template.css

h1 {
  color: [{@text-color}];
  background-color: [{@bg-color}];
}
```

```
templates/exmaple-tags.json

{
  "text-color": "#ffffff",
  "bg-color": "black"
}
```

그리고 npm 패키지를 설치한 뒤 --template와 --tags 옵션들을 통해 사용할 템플릿 CSS파일과 치환자모음 JSON파일을 지정하세요 (\*주의: 확장자를 제외한 파일명을 기입해주세요.)

실행이 완료되면 output 폴더에 치환자가 대체된 새 CSS 파일이 생성됩니다.

```
  $ npm install
  $ npm start --template="example-temaplate" --tags="example-tags"
```

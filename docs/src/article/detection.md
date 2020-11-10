# 허프 변환과 물체 인식 알고리즘

## 두 번째 임무
AI&Web 개발자라는 타이틀에 맞게 나에게 내려진 두 번째 임무는 라벨 인식 알고리즘 개발이었다. 어찌보면 SI성격이 강한 국가 과제 프로젝트는 2021년 1월부터는 외주로 운영된다 하여 향후 PM이 될 준비 과정이라고 생각하면 되고, 내 진짜 업무는 이 알고리즘과 벡터 변환법을 개발하여 특허를 출원하는 것이었다. AI 팀에서 내 역할은 리서치 및 주요 변환 모듈 개발. 학부때 배운 선형대수를 다시 봐야 하나.. 하다가 허프 변환, Convex & Concave, barrel 곡면 보정, perspective 3D model등을 생각하게 되었고, 성능이 감당되지 않을 것 같다는 생각에 쉽게 가자 라는 결론에 도달하여 정공법보단 잔머리를 쓰기 시작했다.


![책상 위의 케첩](/images/kc.jpg)
<p align="middle">
케첩의 라벨로부터 정보를 어떻게 얻어낼 수 있을까? 
</p>

## 딥 러닝과 OpenCV

:::tip Note
딥을 때리면 돼!
:::

라벨 인식을 그냥 하라는 말은 당연히 아니었고(이 경우는 텐서플로우 튜토리얼로 15분만에 해결 가능), 라벨이 예쁘게 찍히지 않았을 경우, 즉 곡면 위의 글자를 인식할 상황을 고려해야 했었다. 당연히 시중에 나와있는 모델로는 불가능. 말 그대로 졸지에 최전선에 서버린 것이다. ~~그래야 특허가 나오잖아~~

나머지는 다음에
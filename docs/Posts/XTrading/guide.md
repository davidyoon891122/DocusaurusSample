---
title: XTrading 가이드
authors: [davidyoon]
tags: [XTrading, 가이드]
---

<script> 
import Image from '@theme/IdealImage';
</script>

# 시작하기

# 사용자 가이드

## 1. 투두리스트 탭

- 초기 화면 알림 허용 팝업
  <img src="/dreamtodoImages/todo_alert_popup.png" width="250px" height="80px" title="todo_alert_popup"/>

  - 허용 안 함 선택 시 미완료 투두에 대한 알림을 받을 수 없어요.
  - 허용 선 택 시 작성한 할 일 중 현재 시간 보다 늦은 시간에 등록되 미완서 할일들은 알림에 등록되어, 시작 시간이 되면 알림을 보내게 됩니다.

- 월간 화면
  <img src="/dreamtodoImages/todo_monthly_calendar.png" width="250px" height="80px" title="todo_monthly_calendar"/>

  - 달력 화면을 위/아래 방향으로 스크롤하여 주간/월간으로 캘린더를 확인할 수 있어요

- 주간 주간
  <img src="/dreamtodoImages/todo_weekly_calendar.png" width="250px" height="80px" title="todo_weekly_calendar"/>

  - 달력 화면을 위/아래 방향으로 스크롤하여 주간/월간으로 캘린더를 확인할 수 있어요

- 할일 정보가 추가 된 화면
  <img src="/dreamtodoImages/todo_added_task.png" width="250px" height="80px" title="todo_added_task"/>

  - 할 일 목록 박스를 터치하여 할 일을 완료 상태로 변경할 수 있어요

- 할일 완료 처리 화면
  <img src="/dreamtodoImages/todo_completed_task.png" width="250px" height="80px" title="todo_completed_task"/>

- 할 일 작성 이동 화면
  <img src="/dreamtodoImages/todo_add_view.png" width="250px" height="80px" title="todo_add_view"/>

  - 오른쪽 하단 + 버튼을 클릭하여 할 일 추가 화면으로 이동합니다

- 할 일 작성 화면(제목)
  <img src="/dreamtodoImages/todo_add_view_title.png" width="250px" height="80px" title="todo_add_view_title"/>

- 할 일 작성 화면(시작시간)
  <img src="/dreamtodoImages/todo_add_start_keyboard.png" width="250px" height="80px" title="todo_add_start_keyboard"/>

  - 시작 시간은 숫자만 입력할 수 있으며 12시간 am pm으로 구분합니다.

- 미완료 투두 표시 화면
  <img src="/dreamtodoImages/todo_calendar_unfinished_display.png" width="250px" height="80px" title="todo_calendar_unfinished_display"/>

  - 미완료 할 일들은 달력에 점으로 표시됩니다.
  - 점 하나: 하나의 미완성 할 일이 존재
  - 점 둘: 둘 이상의 미완성 할 일이 존재

- 일정 변경 메뉴 화면
  <img src="/dreamtodoImages/long_press_menu.png" width="250px" height="80px" title="long_press_menu"/>

  - 할 일 목록에서 특정 할 일을 1초간 터치 시 미루기 팝업이 보여집니다.

- 할 일 미루기 달력 화면
  <img src="/dreamtodoImages/todo_modify_day_calendar.png" width="250px" height="80px" title="todo_modify_day_calendar"/>
  - 미루기 선택 시 작은 달력이 보여지며, 미룰 날을 선택 후 버튼 선택 시 해당 할 일은 선택 한 일로 미루어져 등록됩니다

## 2. 분석 탭

- 데이터 없는 초기 분석 화면
  <img src="/dreamtodoImages/analytics_empty_view.png" width="250px" height="80px" title="analytics_empty_view"/>

  - 초기에는 등록된 데이터가 없어 해당 화면이 보여지게 됩니다.

- 데이터가 등록되어 보여지는 스케줄 표
  <img src="/dreamtodoImages/analytics_24_time_scheduler.png" width="250px" height="80px" title="analytics_24_time_scheduler"/>

  - 금일 등록 된 할일 중 완료된 내용을 바탕으로 24시간 스케줄 표를 보여줍니다.
  - 날짜 뷰를 선택하여 다른 날짜의 24시간 스케줄 표도 확인할 수 있어요
  - 스케줄 표에 특정 할 일을 선택 시 하단에 해당 할달이 몇시간을 소요했는지 표시 됩니다.

- 주간 분석 평가
  <img src="/dreamtodoImages/analytics_weekly_evaluation.png" width="250px" height="80px" title="analytics_weekly_evaluation"/>
  - 금주 투두 리스트 완성 건수를 표시합니다.
  - 완료률에 따라 다른 이미지가 보여지게 됩니다.
  - 금주 가장 많이 완료한 일을 1위부터 5위까지 보여줍니다
  - 금주 가장 많이 완료하지 못한 일을 1위부터 5위까지 보여줍니다.

## 3. 검색 탭

- 검색 결과가 없는 화면입니다.
  <img src="/dreamtodoImages/search_empty_view.png" width="250px" height="80px" title="search_empty_view"/>

  - 초기 화면 및 검색결과가 없는 화면입니다.
  - 뷰 중앙에 “검색 결과가 존재하지 않습니다”라는 문구가 표시 됩니다.

- 검색 결과 리스트 화면
  <img src="/dreamtodoImages/search_result_view.png" width="250px" height="80px" title="search_result_view"/>

  - 사용자가 작성하는 키워드에 따라 검색 결과 리스트를 보여줍니다.
  - 완료 여부(O, X), 할 일 제목, 작성 일의 정보를 보여줍니다.

- 검색 결과 자세히 보기 화면
  <img src="/dreamtodoImages/search_detail_view.png" width="250px" height="80px" title="search_detail_view"/>

  - 출력 리스트 중 특정 할일을 선택하면 작성했던 자세한 내용을 볼 수 있어요.
  - 조회 화면에서는 내용 수정은 불가합니다.

## 4. 더보기

- 미로그인 더보기 화면
  <img src="/dreamtodoImages/more_without_login.png" width="250px" height="80px" title="more_without_login"/>

- 미 로그인 사용 불가 팝업 화면
  <img src="/dreamtodoImages/more_unavailable_popup.png" width="250px" height="80px" title="more_unavailable_popupb"/>

  - 미로그인 사용 불가 메뉴
    - 프로필 수정
    - 서버 백업
    - 계정 삭제

- 로그인 더보기 화면
  <img src="/dreamtodoImages/more_login_view.png" width="250px" height="80px" title="more_login_view"/>

  - 로그인시 더보기 화면에 설정했던 닉네임, 프로필(목표) 정보가 보여집니다.

- 로컬 백업 복원 화면
  <img src="/dreamtodoImages/more_local_backup_view.png" width="250px" height="80px" title="more_local_backup_view"/>

- 로컬 백업 저장 폴더 선택 화면
  <img src="/dreamtodoImages/local_backup_select_folder_view.png" width="250px" height="80px" title="local_backup_select_folder_view"/>

  - 로컬 백업을 선택한 후 디바이스 내에 소중한 할 일 정보를 저장할 수 있습니다.
  - 단, 드림투두 폴더에 저장된 내용은 드림투두 앱 삭제 시 같이 삭제되오니 주의해 주세요!

- 로컬 백업 완료 화면
  <img src="/dreamtodoImages/local_backup_complete_view.png" width="250px" height="80px" title="local_backup_complete_view"/>

  - 로컬 백업 완료 시 완료 일시가 포함된 팝업이 보여집니다
  - 로컬 백업 화면으로 들어오면 마지막 백업 일을 확인할 수 있어요

- 로컬 백업 복원 파일 선택 화면
  <img src="/dreamtodoImages/local_recovery_select_file.png" width="250px" height="80px" title="local_recovery_select_file"/>

  - 디바이스 파일 시스템에서 저장했던 파일을 선택하여 불러올 수 있어요

- 로컬 백업 복원 완료 화면
  <img src="/dreamtodoImages/local_recovery_complete_view.png" width="250px" height="80px" title="local_recovery_complete_view"/>

  - 복구가 완료 되면 복구 완료 팝업이 보여지게 됩니다.
  - 저장한 데이터가 저장적으로 복구 되었는지 확인해 주세요.

- 서버 백업 복원 화면
  <img src="/dreamtodoImages/server_recovery_complete_view.png" width="250px" height="80px" title="server_recovery_complete_view"/>

  - 서버 백업 복원은 로그인을 완료한 유저만 사용 가능합니다.
  - 서버 백업은 서버에 데이터를 저장합니다.
  - 서버 복원은 서버로 부터 저장된 데이터를 받아와 복원 작업을 진행합니다.
  - 서버 백업 선택 시 기존에 저장 된 정보는 삭제되오니 유의하여 주세요.

- 프로필 변경 화면
  <img src="/dreamtodoImages/profile_modify_view.png" width="250px" height="80px" title="profile_modify_view"/>

  - 유저 닉네임, 프로필을 변경할 수 있습니다.
  - 로그인 되어 있는 유저만 사용할 수 있습니다.
  - 닉네임, 프로필 변경 시 기존 닉네임, 프로필 정보는 삭제되오니 유의하여 주세요.

- 알림 설정 화면
  <img src="/dreamtodoImages/alarm_settings_view.png" width="250px" height="80px" title="alarm_settings_view"/>

  - 등록된 알림 리스트를 확인할 수 있어요.
  - 현재 앱의 알림 권한이 표시됩니다.
  - 알림 설정 변경 버튼을 사용하여 앱의 알림 권한을 변경할 수 있어요

- 알림 설정 화면 알림 불허가 상태
  <img src="/dreamtodoImages/alarm_unauthorization_view.png" width="250px" height="80px" title="alarm_unauthorization_view"/>

  - 할 일을 등록해도 알림을 받을 수 없는 상태입니다.

- 알림 등록 리스트 화면
  <img src="/dreamtodoImages/alarm_registered_view.png" width="250px" height="80px" title="alarm_registered_view"/>

  - 활성화된 알림 현황을 확인할 수 있습니다.

- 계정 삭제 화면
  <img src="/dreamtodoImages/account_delete_view.png" width="250px" height="80px" title="account_delete_view"/>
  - 계정 삭제 안내 확인 및 동의 선택 후 계정삭제가 가능합니다.

### 더보기 메뉴 추가 기능 화면 소개

1. 네이버 뉴스

- 네이버 뉴스 화면
  <img src="/dreamtodoImages/naver_news_view.png" width="250px" height="80px" title="naver_news_view"/>

  - 현재 주요 키워드로 등록된 키워드를 선택하여 뉴스 리스트 보여줍니다.

- 뉴스 선택 화면
  <img src="/dreamtodoImages/naver_news_detail_view.png" width="250px" height="80px" title="naver_news_detail_view"/>

  - 상단 우측 버튼을 누르면 뉴스 링크가 복사 되어 공유할 수 있어요.

2. 날씨 정보

- 날씨정보 화면 사용자 위치 사용 허가 팝업 화면
  <img src="/dreamtodoImages/weather_auth_popup.png" width="250px" height="80px" title="weather_auth_popup"/>

  - 사용자 정보 사용 요청 팝업을 보여줍니다.
  - 위치정보를 사용하지 못하면 날씨 정보를 가져올 수 없습니다.

- 날씨 정보 화면
  <img src="/dreamtodoImages/weather_view.png" width="250px" height="80px" title="weather_view"/>

  - 시간 별 날씨 정보, 8일간 주간 정보, 세부(바람, 자외선, 강우량 등) 정보를 보여줍니다.

- 상단 온도 정보 접기 가능
  <img src="/dreamtodoImages/weather_fold_view.png" width="250px" height="80px" title="weather_fold_view"/>

  - 상단 뷰에 상/하 스크롤을 통해 뷰를 변경할 수 있어요.

- 날씨 정보 하단 세부 정보 화면
  <img src="/dreamtodoImages/weather_detail_view.png" width="250px" height="80px" title="weather_detail_view"/>
  
  - 일출, 일몰, 구름, 습도, 바람, 체감, 강우량, 기압, 가시거래, 자외선 지수 정보를 확인할 수 있어요.

## 5. 목표공유 기능

- 목표공유 화면
  <img src="/dreamtodoImages/board_view.png" width="250px" height="80px" title="board_view"/>
  
  - 작성된 공유 목표를 보여줍니다.
  - 작성자, 목표, 프로필, 진행상태 등을 확인할 수 있어요.

- 목표공유 세부 화면
  <img src="/dreamtodoImages/board_detail_view.png" width="250px" height="80px" title="board_detail_view"/>
  
  - 작성된 내용의 컨텐츠를 확인할 수 있어요.
  - 좋아요, 댓글작성, 대댓글 작성 기능을 사용할 수 있어요.
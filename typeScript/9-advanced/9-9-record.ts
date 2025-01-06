
// record
// 함꼐 묶어버림 Record<key, value>

{

  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const navigation: Record<Page, PageInfo> = {
    // page를 key로 pageInfo를 value로

    home: {title: 'home'},
    about: {title: 'about'},
    contact: {title: 'contact'}
  }

}
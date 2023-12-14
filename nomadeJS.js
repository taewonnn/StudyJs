// loop

        const friends = ["nico", "lynn", "ha", "hu"];

        // 기본 for문
        for (let i = 0; i < friends.length; i++) {
            console.log(`i love my friend ${friends[i]}`);
        }
        
        // i love my friend nico
        // i love my friend lynn
        // i love my friend ha
        // i love my friend hu
        
        
        // forEach - 배열에 있는 각각의 엘리먼트에 대한 특정한 액션을 실행
        // forEach((value: string, index: number, array: string[]))
        const addHeart = (cur, i, a) => console.log(cur, i, a)
        friends.forEach(addHeart)

        // 같은 값을 리턴한다.
        friends.forEach((f,i,a) => console.log(f,i,a));

        // nico 0 (4) ['nico', 'lynn', 'ha', 'hu']
        // lynn 1 (4) ['nico', 'lynn', 'ha', 'hu']
        // ha 2 (4) ['nico', 'lynn', 'ha', 'hu']
        // hu 3 (4) ['nico', 'lynn', 'ha', 'hu']

        // for of  -> array 뿐 아니라, iterable한 모든 것에서 동작한다.(Ex. string)
        for(const friend of friends) {
            console.log(friend);
        };

        // string -> 문자/공백 각각 1개씩 반복
        const abc = 'Hello this is very long';
        for(const letter of abc) {
            console.log(letter);
        };  

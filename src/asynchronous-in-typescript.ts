{
  {
    //when we locally test async await, create a functionality that can be waiting for response like Promise. causes async await work based on waiting response method.
    //create promise
    const createPromise = (): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
        const data: string = "i am date here";
        if (data) {
          resolve(data);
        } else {
          reject("error messages here");
        }
      });
    };
    //then calling create promise function
    const showData = async (): Promise<string> => {
      const data: string = await createPromise();
      console.log(data);
      return data;
    };
    showData();
  }

  {
    //fetching data from online platforms.
    //we don't need to create Promise causes when server send me data, it can return me Promise.


    //its for server data structure. array of object
    type TPostData = [
        {
            userid:number;
            id:number;
            title:string;
            body:string;
        }
    ]

    const getPost = async(): Promise<TPostData> =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        console.log(data);
        return data;
    }
    //call function to get data
    getPost();
  }
}

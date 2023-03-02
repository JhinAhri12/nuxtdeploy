export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser();
    if (!user.value) {
      return navigateTo("/user/signup");
    }
    else{
        console.log(user.value?.email)
        const asyncGetCall = async () => {
        try {
            const response = await $fetch(`/api/user/admin`, {
                method: 'POST',
                body: {event: 'IS_ADMIN', email: user.value?.email}});
            if(!response){
                return navigateTo("/");
            }
            // enter you logic when the fetch is successful
           } catch(error) {
        // enter your logic for when there is an error (ex. error toast)
              console.log(error)
             } 
        }
        asyncGetCall()
    }
  });
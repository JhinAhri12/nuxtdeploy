export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser();
    if (!user.value) {
      return navigateTo("/user/signup");
    }
    else{
        const admin = async() => await $fetch(`/api/user/admin`, {
            method: 'POST',
            body: {event: 'IS_ADMIN', email: user.value?.email}
        })
        if (admin.isAdmin = true){
            return navigateTo("/");
        }
    }
  });

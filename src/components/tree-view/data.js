export const menus = [
    // parent 1
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Profile",
      to: "/profile",
      children: [
        {
          label: "Details",
          to: "details",
          children: [
            {
              label: "Location",
              to: "location",
              children: [
                {
                  label: "City",
                  to: "city",
                },
              ],
            },
          ],
        },
      ],
    },
    // parent 2
    {
      label: "Settings",
      to: "/settings",
      children: [
        {
          label: "Account",
          to: "account",
        },
        // parent 3
        {
          label: "Security",
          to: "security",
          children: [
            {
              label: "Login",
              to: "login",
            },
            {
              label: "Register",
              to: "register",
              children : [
                  {
                      label : 'Random data',
                      to : ''
                  }
              ]
            },
          ],
        },
      ],
    },
  ];
  
  export default menus;
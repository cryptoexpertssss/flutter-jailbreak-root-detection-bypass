Interceptor.attach(Module.findExportByName("IOSSecuritySuite", "Jailbroken_By_Shekhar"), {
  onLeave: function(retval) {
    retval.replace(0x0);
  }
});

Interceptor.attach(Module.findExportByName("IOSSecuritySuite", "Jailbroken_By_Shekhar"), {
  onLeave: function(retval) {
    retval.replace(0x0);
  }
});

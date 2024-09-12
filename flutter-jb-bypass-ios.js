Interceptor.attach(Module.findExportByName("IOSSecuritySuite", "Jailbroken_By_Shekhar"), {
  onEnter: function(args) {
    // Print out the function name and arguments
    console.log("Jailbroken_By_Shekhar has been called with arguments:");
    console.log("arg0: " + args[0] + " (context)");

    // Print out the call stack
    console.log("Jailbroken_By_Shekhar called from:\n" +
      Thread.backtrace(this.context, Backtracer.ACCURATE)
      .map(DebugSymbol.fromAddress).join("\n") + "\n");
  },
  onLeave: function(retval) {
    // Print out the return value
    console.log("Jailbroken_By_Shekhar returned: " + retval);
    console.log("Bypassing the application . . .");
    // Set the return value to 0x0 (False)
    retval.replace(0x0);
  }
});

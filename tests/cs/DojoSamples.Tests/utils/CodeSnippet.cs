using System.IO;
using System.Threading.Tasks;
using CSScriptLib;
using Dojo.Net;

namespace DojoSamples.Tests.utils
{
    public static class CodeSnippet
    {
        public static async Task<dynamic> Run(string script, string id = "")
        {
            var path = Path.GetRelativePath(".", $"../../../../../../{script}");

            var codeString = File.ReadAllText(path);

            if (id.Length > 0)
            {
                codeString = codeString.Replace("<PAYMENT_INTENT_ID>", id);
            }
            
            var code = @"using System;
                                using System.Net.Http;
                                using Dojo.Net;
                                using System.Threading.Tasks;
                                using DojoSamples.Tests.utils;
                                using System.Collections.Generic;

                                 public class Script : ISnippet
                                 {
                                     public async Task<dynamic> Run()
                                     {
                                         " + codeString + @"
                                        return result;
                                     }
                                 }";

            dynamic snippet = CSScript.Evaluator.LoadCode(code);
            return await snippet.Run();
        } 
    }
}
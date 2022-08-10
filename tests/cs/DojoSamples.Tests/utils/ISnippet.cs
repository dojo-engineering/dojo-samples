using System.Threading.Tasks;

namespace DojoSamples.Tests.utils
{
    public interface ISnippet
    {
        public Task<dynamic> Run();
    }
}
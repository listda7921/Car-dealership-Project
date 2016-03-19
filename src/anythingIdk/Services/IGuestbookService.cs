using System.Collections.Generic;
using anythingIdk.Models;

namespace anythingIdk.Services
{
    public interface IGuestbookService
    {
        IList<GuestbookEntry> ListEntries();
        void SaveEntry(GuestbookEntry entry);
    }
}

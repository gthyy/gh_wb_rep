(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGUKIg8wAWVSdlAMUjkANAFoATVSPVdsVHILagUzBSEAYwggWnVXP1F0AWcFWAw1BzcHO1k\/ADNVZAIkBT5VYwxvCjEPCwFpUmBQblJjAGABbQEzUiNXJVQ4C2oFOQUIAHYIJFo8V2dRNwE0BSEMKAcqB3ZZawA\/VSM=","r":0.29},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoPJ11iAmZWclMPA2gMOFI7UmVTNgMxXXsLagk\/UnYHZAoiAC9WPlZzCG4CX1RtVWUBPVk\/VWVRYwstVG8CNFMwDzRdWQJqVmRTbQMzDGVSMVJnUyIDcV0xC2oJNVJfB3EKJgBmVmZWNQg7AiZUcFV4AXBZa1VqUSc=","r":0.42},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWgMJFlmUDRWclMPVD8GMgFoBTJXMwQ\/VHILagQyASVUNwEpDyBXPw4rAGZWCwQ9VWVQbAdoAiZTOlQwATZWZQFYDD9ZZlBsVjNTYFRkBmYBcwV0V2wEZ1Q6C1QEJgElVG8BaA9lV3AOLAB6ViQEMVU8UCc=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0MJA4xB2MAJABcVT4EMFA5VmEFYVNpXHoKa1JkUnYNbg0lAS5QOAciUzUAXQQ9U2MMMAVgBzYBNAstAzhWYFQ3DDcOCgdvADIAPlVkBGRQNVZjBXRTIVwwCmtSblJfDXsNIQFnUGUHYVN2AHYELVN3DGgFbwdz","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oJIQo1VzMGIgBcB2wANAduDTpXNFVmU3VQMVdhBSFQMwggWXZTO1N2BmAGW1duUWEHOwBuXmVQdgZvUGZbbANkCQwKOFcyBm0AMAc1AGQHZA0qV3BVO1MyUD5XWgUnUCAIb1kzU2NTNQYjBnBXflF1B2MAal4q","r":0.31}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();
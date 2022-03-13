

b = 0;

function changes(a) {
  if (a == b) {
    if (a < 8) {
      b = 0;
      document.getElementById("section-1").innerHTML = `<H1>Debut Era<BR> <I>The Hip-Hop Roots</I></div>`;
    }
    else if (a < 11) {

      b = 0;
      document.getElementById("section-2").innerHTML = `<H1>HYYH<BR> <I>The Beginning Of the Storyline</I></H1>`;

    }
    else if (a < 13) {

      b = 0;
      document.getElementById("section-3").innerHTML = `<H1>Wings<BR> <I>The Ascent</I></H1>`;

    }
    else if (a < 16) {

      b = 0;
      document.getElementById("section-4").innerHTML = `<H1>Love Yourself<BR> <I>The Message</I></H1>`;

    }
    else if (a < 19) {

      b = 0;
      document.getElementById("section-5").innerHTML = `<H1>Map Of The Soul<BR> <I>Understanding Yourself</I></H1>`;

    }
    else if (a < 20) {

      b = 0;
      document.getElementById("section-6").innerHTML = `<H1>Dynamite <BR> <I>The Billboard #1 and Grammy Nomination</I></H1>`;

    }
    else if (a < 21) {

      b = 0;
      document.getElementById("section-7").innerHTML = ` <H1>Current<BR> <I>The Quarantine Album</I></H1>`;

    }
    else if (a < 25) {

      b = 0;
      document.getElementById("section-8").innerHTML = `<H1>Noteworthy Albums</H1>`;

    }
    else if (a < 29) {

      b = 0;
      document.getElementById("section-9").innerHTML = ` <H1>Collaborations With Western Artists</H1>`;

    } else {

      b = 0;
      document.getElementById("section-10").innerHTML = `<H1>Solo Mixtapes</H1>`;

    }
  }
  else {
    b = a;
    switch (a) {
      case 4: document.getElementById("section-1").innerHTML = `        <div id ="text"><H2>2 Cool 4 Skool</H2>2 Cool 4 Skool is where it all began for BTS. The album's Title song "No More Dream" is a song that curses society for telling them they can't follow their dreams.
                                                                        </div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/rBG5L7UsUxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                                        `;
        break;
      case 5: document.getElementById("section-1").innerHTML = ` <div id ="text"><H2>In O!RUL8,2?</H2>With O!RUL8,2? (Oh! Are you late, too?) their first mini album, BTS offers the message that "you must find your happiness and your own life before it's too late."
                                                                                Lyrics that brutally lay open reality that children are raised as studying machines without a chance to think about their future; Where classmates are not friends but competitors. </div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/mmgxPLLLyVo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 6: document.getElementById("section-1").innerHTML = ` <div id ="text"><H2>Skool Luv Affair</H2>This album, released in February of 2014 concludes the "School Trilogy" project that discusses the life of a typical high school student. With the previous two albums talking about their dreams and happiness, this one focuses on the feelings of love.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/m8MfJg68oCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 7: document.getElementById("section-1").innerHTML = ` <div id ="text"><H2>Dark & Wild</H2>BTS' Dark & Wild, their first full length album, transitions into more mature themes. BTS went all out with new aesthetics and a new music style in a tightly-composed album with flawless tracks.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/bagj78IQ3l0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 8: document.getElementById("section-2").innerHTML = ` <div id ="text"><H2>The Most Beautiful Moment in Life pt.1</H2>No longer just young boys, the album is an introduction to BTS as a group that continues to grow and develop. The most beautiful moment in life pt.1 focuses on the uncertain future more than the glamour of youth.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/jjskoRh8GTE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 9: document.getElementById("section-2").innerHTML = ` <div id ="text"><H2>The Most Beautiful Moment in Life pt.2</H2>The most beautiful moment in life pt.2 sings about the energy of youth barreling forward, embracing even the uncertainty and insecurity. Now beginning to taste the bitterness of grown-up life, they have nothing else to do but keep running. Thus, the title track- 'Run'.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/5Wn85Ge22FQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 10: document.getElementById("section-2").innerHTML = ` <div id ="text"><H2>The Most Beautiful Moment in Life : Young Forever</H2>A special album, The most beautiful moment in life : YOUNG FOREVER, marks the conclusion of the epic journey of the series, containing the last stories told by young people who, despite an uncertain and insecure reality continue to surge forward.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/4ujQOR2DMFM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 11: document.getElementById("section-3").innerHTML = ` <div id ="text"><H2>Wings</H2>BTS now stands before a new door.Wings contains songs about boys who encounter temptation for the first time and must ponder and agonize in the face of it. As the seven boys experience pain and bliss, they bring forth the image of birds that break out of their shells and try to take flight for the first time.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/hmE9f-TEutc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 12: document.getElementById("section-3").innerHTML = ` <div id ="text"><H2>You Never Walk Alone</H2>You Never Walk Alone completes the stories of youth and growth that could not all be contained in the Wings album. Whereas The most beautiful moment in life series and Wings were narratives of youth and growth, this additional chapter to Wings is a message of warm consolation and hope for the suffering youth of this generation.      </div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/xEeFrLSkMm8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 13: document.getElementById("section-4").innerHTML = ` <div id ="text"><H2>Love Yourself 'Her'</H2>Love Yourself 'HER' marks the beginning of the 'Love Yourself' Trilogy. It is an expression of the anxiety and elation of love. The "love" that BTS aims to convey in the Love Yourself series is both the individual experience of a boy growing into adulthood and a message of peace and unity to our society today. In the album , the image of boys in love for the first time are expressed in a refreshing and cheerful take that aims to talk about the topic of "love" while immersed in a coming-of-age tale.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/MBdVXkSdhwU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 14: document.getElementById("section-4").innerHTML = ` <div id ="text"><H2>Love Yourself 'Tear'</H2>BTS' Love Yourself series bears the message that loving oneself is the beginning of true love. Whereas the previously unveiled albums expressed the heart-fluttering and tingling moments of love, Love Yourself 'TEAR' album embodies the pain of boys faced with parting.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/7C2z4GqqS5E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 15: document.getElementById("section-4").innerHTML = ` <div id ="text"><H2>Love Yourself 'Answer'</H2>The BTS Love Yourself series creates a narrative by linking the key songs in each album into a single theme, imparting the message that "loving yourself is true love". Like a well-written novel having introduction, development, twists, and conclusion it shared a compelling story for two and a half years. 'ANSWER' is the final piece of the puzzle.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/pBuZEGYXA6E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 16: document.getElementById("section-5").innerHTML = ` <div id ="text"><H2>Map of The Soul : Persona</H2>Through the seven tracks in 'Map of The Soul:Persona', BTS weaves together what they genuinely felt both within themselves and the ever-widening world around them. World-leading singer Halsey takes part as featured artist in the lead single 'Boy With Luv (Feat. Halsey)' where BTS talks about how true strength and love come from finding joy in the little things in life and reaching out to the world.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/XsX3ATc3FbA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 17: document.getElementById("section-5").innerHTML = ` <div id ="text"><H2>"MAP OF THE SOUL : 7"</h2> MAP OF THE SOUL : 7 looks back on the past seven years of BTS since their debut as seven members of one team. The journey was not always smooth sailing, and there were special travails that they had to endure in their rise as global superstars. Now, understanding that the scars left by those hardships is a part of their real selves, BTS accepts both "the self I want to show" and the "self I want to scorn" to at last tell their own story of finding their "real and complete selves".</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/gwMa6gpoE9I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 18: document.getElementById("section-5").innerHTML = ` <div id ="text"><H2>Map of The Soul : The Journey</H2>It is a Japanese album that concludes the "Map of The Soul" Trilogy. It is a re-packaged album of the previous songs with the Japanese originals "Stay Gold" and "Your Eyes Tell".</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/9IHwqdz8Xhw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 19: document.getElementById("section-6").innerHTML = ` <div id ="text"><H2>Dynamite</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/gdZLi9oWNZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 20: document.getElementById("section-7").innerHTML = ` <div id ="text"><H2>BE</H2>As a sense of helplessness looms in every corner of the world, BTS opens themselves up to express their mixed feelings about this situation - fear and anxiety mingled with the determination to overcome all this. In their lead single "Life Goes On",  BTS echoes in a low voice the comforting message that in the face of unexpected turns life goes on and extends their hands towards the future.</div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/-5q5mZbe3V8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 21: document.getElementById("section-8").innerHTML = ` <div id ="text"><H2>Face Yourself</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/7OX7dIRReSA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 22: document.getElementById("section-8").innerHTML = ` <div id ="text"><H2>Crystal Snow</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/s3Fs7dlZ7WY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 23: document.getElementById("section-8").innerHTML = ` <div id ="text"><H2>Lights</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/eaUpme4jalE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 24: document.getElementById("section-8").innerHTML = ` <div id ="text"><H2>BTS World OST</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/aKSxbt-O6TA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 25: document.getElementById("section-9").innerHTML = ` <div id ="text"><H2>A Brand New Day ft. Zara Larson</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/6gkZGJG-yps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 26: document.getElementById("section-9").innerHTML = ` <div id ="text"><H2>Who ft. Lauv</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/vS0YXAfUo4k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 27: document.getElementById("section-9").innerHTML = ` <div id ="text"><H2>Waste it on Me ft. Steve Aoki</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/WP7duqy60h8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 28: document.getElementById("section-9").innerHTML = ` <div id ="text"><H2>Blueberry Eyes ft SUGA</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/TzFRVk2ektI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 29: document.getElementById("section-10").innerHTML = ` <div id ="text"><H2>D - 2 - AgustD</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/qGjAWJ2zWWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 30: document.getElementById("section-10").innerHTML = ` <div id ="text"><H2>Mono - RM</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/F8wI5ZosdRA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
      case 31: document.getElementById("section-10").innerHTML = ` <div id ="text"><H2>Hope World - J-Hope</H2></div>
                                                                        <iframe id ="Mv" width="560" height="315" src="https://www.youtube.com/embed/OK3GJ0WIQ8s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; break;
    }
  }
}

function Redirect(a) {
  switch (a) {
    case 4: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nuxf7hW7Qek1mCEm7snA6G4DcPG0xJ0oI"; break;
    case 5: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_mYZiyTIq2Q61uOe98_rtIAh5WRtkjpg7k"; break;
    case 6: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_ltWTaB893duB6RcxRLDCkSxP6vQO-24nw"; break;
    case 7: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nkFbLFjDD8aBetaNzKozyGv_Rjop6HLCk"; break;
    case 8: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_mmvOqx9jtOSHlXGUQ-AnJungbxNqFrvrM"; break;
    case 9: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_kj4vr-5n1XT5shiO9znjr_bu7L3J4UQE0"; break;
    case 10: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nR-MPrmAj1Elv7l1RQjvoYzhzBDhDmxrA"; break;
    case 11: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_kOtUtfUOAC9eXr_qhMMcUclzZ7-Yk_PWs"; break;
    case 12: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_lxOVcqXyCVaCPMBbop3xSta98N1e1sRhc"; break;
    case 13: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_kp9bbGWFf3oguw3MpFh2KUx4bEGzjf4wE"; break;
    case 14: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nUGHD0PizAVMtRadQgtFK90Abbx0OQMdc"; break;
    case 15: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_n2_nP6zBi1PxoJIJl9pUsAcG9oEp08YBw"; break;
    case 16: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_kOInxuYTsagbhb9igbFGu42aW7zyjXMC0"; break;
    case 17: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nzEPBPA0x5BxgeWmvfkSQMqSoLL9MH2G4"; break;
    case 18: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nMU9EWfajDilCj9_-xqVBulloys-AglyE"; break;
    case 19: window.location.href = "https://youtube.com/playlist?list=PLOsCsGD3yE8U1Tw-G9JdoWuATGfFNprL0"; break;
    case 20: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_lrj6FwTFFdXG2HCmEMDQWzRDrBU8NLdhw"; break;
    case 21: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_nHj_oyW1OJJ8g4LM5spUI0JsGhD3lC-U8"; break;
    case 22: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_kcw0P9zyoJDawP2hOPesKSn_OANFYvA3c"; break;
    case 23: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_m_ZZdXj-iqG1r4BQlRnKpVaF1VxNLmPPw"; break;
    case 24: window.location.href = "https://youtube.com/playlist?list=OLAK5uy_m2-hTH_V0_dBlOSVkcoQakb3aszeJrRSA"; break;
    case 29: window.location.href = "https://soundcloud.com/bangtan/sets/d-2"; break;
    case 30: window.location.href = "https://soundcloud.com/bangtan/sets/rm-mono-2018"; break;
    case 31: window.location.href = "https://soundcloud.com/bangtan/sets/j-hope-hope-world"; break;
  }
}
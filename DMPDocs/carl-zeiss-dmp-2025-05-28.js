cz_dmp = { "cz-dmp" : `<div id="cz-dmp" class="">
    <div  class="content-page" id="text_start">
        <h1 class="text-center">
            <p class="text-center h1">
                <center>Forschungsdatenkonzept für Carl-Zeiss Stiftung</center>
            </p>
        </h1>
        <p class="c0"><span class="c3"><b>Projektname: $_PROJECTNAME&nbsp;</b></span></p>
        <p class="c0"><span class="c3"><b>Forschungsf&ouml;rderer</b>: Bundesministerium f&uuml;r Bildung und
                Forschung</span></p>
        <p class="c0"><span class="c3"><b>F&ouml;rderprogramm:</b> $_FUNDINGPROGRAMME&nbsp;</span></p>
        <p class="c0"><span class="c3"><b>FKZ: $_DMPVERSION&nbsp;</b></span></p>

        <p class="c0"><span class="c3"><b>Projektkoordinator</b>: #if$_PROJECTCOORDINATOR $_ADDPROJECTCOORDINATOR #endif$_PROJECTCOORDINATOR &nbsp; #if!$_PROJECTCOORDINATOR $_DATAOFFICER #endif!$_PROJECTCOORDINATOR</span></p>
        <p class="c0"><span class="c3"><b>Kontaktperson Datenmanagement</b>: $_DATAOFFICER&nbsp;</span></p>

        <p class="c0"><span class="c3"><b>Kontakt</b>: $_EMAIL&nbsp;</span></p>
       <p class="c0"><span class="c3"><b>Projektbeschreibung</b>:
                <p class="c0"> <span class="c1">
                        Das $_PROJECTNAME hat folgendes Ziel: $_PROJECTAIM. Daher sind Datenerhebung #if!$_VVISUALIZATION und Integration #endif!$_VVISUALIZATION #if$_VVISUALIZATION , Integration und Visualisierung
                        #endif$_VVISUALIZATION #if$_DATAPLANT unter Verwendung der DataPLANT ARC-Struktur absolut
                        notwendig #endif$_DATAPLANT #if!$_DATAPLANT durch einen standardisierten
                        Datenmanagementprozess absolut notwendig #endif!$_DATAPLANT da die Daten nicht nur zum
                        Verständnis von Prinzipien verwendet werden, sondern auch über die Herkunft der analysierten
                        Daten informiert werden muss. Stakeholder müssen ebenfalls über die Herkunft der Daten
                        informiert werden. Es ist daher notwendig sicherzustellen, dass die Daten gut generiert und
                        auch gut mit Metadaten unter Verwendung offener Standards annotiert werden, wie im nächsten
                        Abschnitt dargelegt.

                    </span></p>

                <p class="c0">
                    <span class="c1">
                        list-dataCollection-de
                    </span>
                </p>
            </span></p>
        <p class="c0 c2"><span class="c1"></span></p>
        <p class="c0"><span class="c3"><b>Erstellungsdatum:</b> $_CREATIONDATE&nbsp; </span></p>
        <p class="c0"><span class="c3"><b>&Auml;nderungsdatum:</b> $_MODIFICATIONDATE&nbsp;</span></p>
       
       
                <p class="c0"><span class="c3"><b>Datenschutz</b></span></p>
        <p class="c0"><span class="c1">
                <p class="c0">
                    <span class="c1">
                        Im Moment erwarten wir keine ethischen oder rechtlichen Probleme beim Datenaustausch. In
                        Bezug auf Ethik, da es sich um Pflanzendaten handelt, ist kein Ethikkomitee erforderlich,
                        jedoch wird Sorgfalt bei der Aufteilung der Vorteile von Pflanzenressourcen berücksichtigt.
                        #issuewarning Sie müssen sicherstellen, dass Sie die erforderliche Sorgfaltspflicht erfüllen. Derzeit warten wir auf eine Klärung, ob das Nagoya-Protokoll (🡺 siehe Nagoya-Protokoll) auch Sequenzinformationen umfasst. Unabhängig davon kann die Nutzung von Material aus einem anderen Land als Ihrem eigenen (oder dem Ihres Partners) und dessen physikalische oder biochemische Charakterisierung (z.B. Metaboliten, Proteom, RNASeq, etc.) eine relevante Handlung im Sinne des Nagoya-Protokolls darstellen. Ausnahmen könnten Materialien aus Ländern wie den USA (Nicht-Partner), Irland (hat nicht unterzeichnet—trotzdem kontaktieren), usw. sein, wobei jedoch andere Gesetze Anwendung finden könnten. #endissuewarning
                    </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die einzigen personenbezogenen Daten, die möglicherweise gespeichert werden, sind der Name
                        und die Zugehörigkeit des Einreichers in den Metadaten der Daten. Darüber hinaus werden
                        personenbezogene Daten für Verbreitungs- und Kommunikationsaktivitäten gesammelt, wobei
                        spezifische Methoden und Verfahren verwendet werden, die von den $_PROJECTNAME-Partnern
                        entwickelt wurden, um den Datenschutz einzuhalten. #issuewarning Sie müssen informieren und
                        besser eine SCHRIFTLICHE Zustimmung einholen, dass Sie E-Mails und Namen oder sogar
                        Pseudonyme wie Twitter-Handles speichern, wir entschuldigen uns sehr für diese Probleme, die
                        wir nicht erfunden haben. #endissuewarning
                    </span>
                </p>


            </span></p>

        <p class="c0 c2"><span class="c1">
                <p class="c20">
                    <span class="c1">
                        Falls Daten nur innerhalb des Konsortiums geteilt werden, wenn die Daten noch nicht fertig
                        sind oder sich in der IP-Prüfung befinden, werden die Daten intern gehostet und der
                        Benutzername und das Passwort werden benötigt (siehe auch unsere GDPR-Regeln).
                        Wenn Daten unter finalen EU- oder US-Repositorys öffentlich gemacht werden, ist
                        normalerweise ein vollständig anonymer Zugang erlaubt. Dies ist auch bei ENA der Fall und
                        beide entsprechen den GDPR-Anforderungen.

                    </span>
                </p>

                <p class="c0"><span class="c3"><b>Open Access</b></span></p>
        <p class="c0 c2"><span class="c1">
                <p class="c20">
                    <span class="c1">
                        Falls Daten nur innerhalb des Konsortiums geteilt werden, wenn die Daten noch nicht fertig
                        sind oder sich in der IP-Prüfung befinden, werden die Daten intern gehostet und der
                        Benutzername und das Passwort werden benötigt (siehe auch unsere GDPR-Regeln).
                        Wenn Daten unter finalen EU- oder US-Repositorys öffentlich gemacht werden, ist
                        normalerweise ein vollständig anonymer Zugang erlaubt. Dies ist auch bei ENA der Fall und
                        beide entsprechen den GDPR-Anforderungen.

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">Es wird keine Einschränkungen geben, sobald die Daten öffentlich gemacht
                        werden.</span>
                    <span class="c1">
                        text-made-public-de
                    </span>
                </p>


                <p class="c0">
                    <span class="c1">
                        Die Daten werden zunächst den $_PROJECTNAME Partnern zugutekommen, aber auch ausgewählten
                        Stakeholdern, die eng in das Projekt eingebunden sind, und dann der wissenschaftlichen
                        Gemeinschaft, die an $_STUDYOBJECT arbeitet. $_DATAUTILITY Darüber hinaus können auch die
                        allgemeine Öffentlichkeit, die an $_STUDYOBJECT interessiert ist, die Daten nach der
                        Veröffentlichung nutzen. Die Daten werden gemäß dem Verbreitungs- und Kommunikationsplan des
                        $_PROJECTNAME verbreitet, #if$_DATAPLANT der sich mit der DataPLANT-Plattform oder anderen
                        Mitteln abstimmt #endif$_DATAPLANT.

                    </span>
                </p>

            

         <p class="c0"><span class="c3"><b>Open Source</b> </span></p>

        <p class="c0"><span class="c1">#if$_EU Das $_PROJECTNAME ist Teil der Open Data Initiative (ODI) der EU.
                #endif$_EU Um optimal von offenen Daten zu profitieren, ist es notwendig, die Daten nicht nur zu
                speichern, sondern sie auch auffindbar, zugänglich, interoperabel und wiederverwendbar (FAIR) zu
                machen. #if$_PROTECT Wir unterstützen offene und FAIR-Daten, berücksichtigen jedoch auch die
                Notwendigkeit, einzelne Datensätze zu schützen. #endif$_PROTECT
            </span>
        </p>
        <p class="c0"><span class="c1">#if$_DATAPLANT Durch die Implementierung von DataPLANT können Forscher
                sicherstellen, dass alle relevanten Richtlinien und Anforderungen im Zusammenhang mit dem
                Datenmanagement eingehalten werden, was zu einer höheren Qualität und Zuverlässigkeit der
                Forschungsdaten führt. #endif$_DATAPLANT&nbsp; </span>
        </p>

        
        <p class="c0"><span class="c3"><b>Gemeinsame Datenbanken:</b> </span></p>

        <p class="c0">
            <span class="c1">
                #if$_DATAPLANT In DataPLANT, die Datenspeicherung basiert auf dem Annotated Research Context (ARC).
                Dieser ist passwortgeschützt, daher muss vor dem Erhalt von Daten oder der Generierung von Proben
                eine Authentifizierung erfolgen. #endif$_DATAPLANT
            </span>
        </p>


        <p class="c20">
            <span class="c1">
                Online-Plattformen werden durch Schwachstellen-Scans, Zwei-Faktor-Authentifizierung und tägliche
                automatische Backups geschützt, die eine sofortige Wiederherstellung ermöglichen. Alle Partner, die
                vertrauliche Projektdaten halten, nutzen sichere Plattformen mit automatischen Backups und sicheren
                externen Kopien.
                #if$_DATAPLANT DataHUB und ARCs wurden in DataPLANT generiert, Datensicherheit wird durchgesetzt.
                Dies umfasst sichere Speicherung, und die Verwendung von Passwörtern und Benutzernamen wird generell
                über separate sichere Medien übertragen. #endif$_DATAPLANT
            </span>
        </p>

       
            <p class="c0"><span class="c1">Das $_PROJECTNAME trägt die Kosten für die Datenkuratierung,
                        #if$_DATAPLANT ARC-Konsistenzprüfungen, #endif$_DATAPLANT und die Datenwartung/-sicherheit
                        vor der Übertragung an öffentliche Repositorien. Nachfolgende Kosten werden dann von den
                        Betreibern dieser Repositorien getragen.
                        </span>
            </p>

                <p class="c0">
                    <span class="c1">
                        Zusätzlich werden Kosten für die Speicherung nach der Veröffentlichung von den
                        Endpunkt-Repositorien (z.B. ENA) getragen, jedoch nicht vom $_PROJECTNAME oder seinen
                        Mitgliedern, sondern durch das Betriebsbudget dieser Repositorien.
                    </span>
                </p>
                
        text-repository-long-de  

            

        <p class="c0"><span class="c3"><b>Die Dateibenennung erfolgt nach folgendem Standard</b>:</span></p>
        <p class="c0">
            <span class="c1">
                Datenvariablen werden mit Standardnamen versehen. Zum Beispiel werden Gene, Proteine und Metaboliten
                gemäß anerkannter Nomenklatur und Konventionen benannt. Diese werden nach Möglichkeit auch mit
                funktionalen Ontologien verknüpft. Datensätze werden ebenfalls sinnvoll benannt, um die Lesbarkeit
                durch Menschen zu gewährleisten. Pflanzennamen umfassen traditionelle Namen, Binomialnamen und alle
                Stamm-/Kultivar-/Unterart-/Sortenbezeichner.
            </span>
        </p>

        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c3"><b>Datendokumentation</b></span></p>
        <p class="c0">
            text-standards-long-de
            </p>


        
        <p class="c0"><span class="c3"><b>Datenerhalt</b></span></p>
        <p class="c0 c2"><span class="c1">

                <p class="c0">
                    <span class="c1">text-data-size-de
                    </span>
                </p>


                <p class="c0">
                    #if$_DATAPLANT Da das $_PROJECTNAME eng mit DataPLANT abgestimmt ist, werden der ARC-Konverter und
                    DataHUB verwendet, um die Endpunkt-Repositories zu finden und die Daten automatisch in die
                    Repositories hochzuladen. #endif$_DATAPLANT

                    <span class="c1"> </span>
                </p>
                <p class="c0">
                   text-repository-short-de
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Einreichung ist kostenlos, und es ist das Ziel (zumindest von ENA), so viele Daten wie
                        möglich zu erhalten. Daher sind Absprachen weder notwendig noch sinnvoll.
                        Catch-all-Repositories sind nicht erforderlich.
                        #if$_DATAPLANT Für DataPLANT wurde dies vereinbart. #endif$_DATAPLANT #issuewarning Wenn
                        keine Datenmanagementplattform wie DataPLANT verwendet wird, müssen Sie ein geeignetes
                        Repository finden, um Ihre Daten nach der Veröffentlichung zu speichern oder zu archivieren.
                        #endissuewarning

                    </span>
                </p>

            </span></p>




        <p class="c0 c2"><span class="c3"><b>Reproduzierbarkeit</b></span></p>

        <p class="c0 c2"><span class="c1">
                <p class="c0"><span class="c1">Öffentliche Daten werden wie im vorherigen Absatz beschrieben
                        extrahiert. Für das $_PROJECTNAME werden spezifische Datensätze von den Konsortialpartnern
                        generiert.</span></p>


                <p class="c0">
                    <span class="c1"> Daten unterschiedlicher Typen oder aus verschiedenen Bereichen werden mit
                        einzigartigen Ansätzen generiert. Zum Beispiel:</span>
                </p>
                list-dataType-de

                #if$_PREVIOUSPROJECTS&nbsp;
                <p class="c0"><span class="c1"> Daten aus früheren Projekten wie $_PREVIOUSPROJECTS werden
                        berücksichtigt. </span></p>
                #endif$_PREVIOUSPROJECTS

                <p class="c0"><span class="c1">text-data-size-de</span></p>
                <p class="c0"><span class="c3"></span></p>

            </span></p>


    </div>
</div>
</div>`};
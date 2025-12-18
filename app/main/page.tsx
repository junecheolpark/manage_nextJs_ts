import Image from "next/image";

export default function Home() {
  return (
    <section className="contens">
            {/* 검색 영역 */}
            <section className="schBox">
                <p>
                    총 <span id="totalCnt" className="colBlue">0</span>건
                </p>
                <select id="ddlDateSearch" style={{ width: "120px" }}>
                    <option value="">작성일</option>
                </select>

                <DatePicker
                    selected={search.schd1}
                    onChange={(date) =>
                        setSearch(prev => ({
                            ...prev,
                            schd1: date
                        }))
                    }
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    placeholderText="시작일"
                    className="cal"
                    style={{ width: "120px" }}
                />
                ~
                <DatePicker
                    selected={search.schd2}
                    onChange={(date) =>
                        setSearch(prev => ({
                            ...prev,
                            schd2: date
                        }))
                    }
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    placeholderText="종료일"
                    className="cal"
                    style={{ width: "120px" }}
                />

                <input type="text" name="schrnm" placeholder="작성자" style={{ width: "120px" }} onChange={searchChange} />
                <input type="text" name="schtxt" placeholder="제목" style={{ width: "250px" }} onChange={searchChange} onKeyUp={enterKey} />
                <input type="submit" id="btnSch" value="검색" className="btn btnBlue" />
            </section>
            <section className={style.board_01}>
                {/* 게시판 목록 */}
                <section className="shadowBox">
                    <table className="tableList">
                        <colgroup>
                            <col />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "17%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>제목</th>
                                <th>첨부파일</th>
                                <th>작성자</th>
                                <th>조회수</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boardList.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="noData">
                                        검색된 게시글이 없습니다.
                                    </td>
                                </tr>
                            ) : (
                                boardList.map((item) => (
                                    <tr
                                        key={item.board_IDX}
                                        onClick={() => fnBoardView(item.board_IDX)} // 클릭 시 상세 보기
                                        className={` ${selBoard === item.board_IDX ? "selRow" : ""}`}
                                        onClick={() => fnBoardView(item.board_IDX)}
                                    >
                                        <td className="tdL">
                                            <p className="text-ellipsis" title={item.subj}>
                                                <span>{item.subj}</span>
                                            </p>
                                        </td>
                                        <td>
                                            <span className="lblFile">
                                                {item.file_IDX === 0 ? (
                                                    "-"
                                                ) : (
                                                    <img
                                                        src="/images/icon/ic_file.png"
                                                        alt="첨부파일 있음"
                                                        height="16"
                                                    />
                                                )}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="lblRegName">{item.reg_NM}</span>
                                        </td>
                                        <td>
                                            <span className="lblCnt">{item.read_CNT}</span>
                                        </td>
                                        <td>
                                            <span className="lblRegDate">{item.reg_DATE.substr(0, 10)}</span>
                                        </td>
                                    </tr>
                                )))}
                        </tbody>
                    </table>
                    <section id="pagingView" className="paging" />
                </section>

                {/* 작성 영역 */}
                <section className="shadowBox">
                    <table className="tableView">
                        <colgroup>
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "40%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "38%" }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>작성자</th>
                                <td><span id="regName">{adminUser._c_logNm}</span></td>
                                <th>작성날짜</th>
                                <td><span id="regDate">{boardView.reg_DATE.substr(0, 16) || '자동 저장'}</span></td>
                            </tr>
                            <tr>
                                <td colSpan="4" style={{ padding: "10px 0" }}>
                                    <input type="text" name="subj" value={boardView.subj || ""} maxLength="100" placeholder="제목을 입력해 주세요" onChange={boardViewChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4" style={{ padding: "10px 0", height: "304px" }}>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={boardView.conts || ""}
                                        config={{
                                            placeholder: "내용을 입력해 주세요",
                                            ckfinder: { uploadUrl: "/common/uploadImgOne" }
                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            boardViewChange({
                                                target: { name: "conts", value: data }
                                            });
                                        }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* 파일 업로드 */}
                    <div className="fileUploadBody">
                        <FileDropDown
                            serverFiles={serverFiles}               // 기존 파일
                            newFiles={newFiles}                     // 새로 추가된 파일
                            onChangeFiles={setNewFiles}             // FileDropDown에서 파일이 변경되면 호출됨
                            onRemoveServerFile={fnRemoveServerFile} // 기존파일 삭제
                            onRemoveNewFile={fnRemoveNewFile}       // 새파일 삭제
                        />

                        <div id="fileFoot">
                            <div className="filebox mgTB10">
                                <label htmlFor="j_file">파일추가</label>
                                <input type="file" id="j_file" multiple onChange={fnAddFiles}/>
                                <a href="#download" id="fileDownBtn" className="btn btnWhite" style={{ display: "none" }}>
                                    파일전체 다운로드
                                </a>
                                <a href="#input" id="fileUpBtn" className="btn btnBlueLine floatR" style={{ display: "none" }}>
                                    파일 업로드
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 하단 버튼 */}
                    <div className={style.boardFootBtn}>
                        <a href="#" className="btn btnBlue" id="btnInput" onClick={() => fnBoardInput(0)}>{selBoard === 0 ? "등록" : "수정"}</a>
                        <a href="#" className="btn btnRed" id="btnDelete" style={{ display: selBoard === 0 ? "none" : "inline-block" }} onClick={fnBoardDelete}>삭제</a>
                        <a href="#" className="btn btnWhite" id="btnCancel" onClick={fnBoardCancel}>취소</a>
                    </div>
                </section>
            </section>

        </section>
  );
}
